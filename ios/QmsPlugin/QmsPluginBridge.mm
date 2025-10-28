#import <React/RCTBridgeModule.h>
#import "QmsPluginSpec.h"
#import <QmsPluginFramework/QmsPluginFramework.h>

@interface QmsPlugin : NSObject <NativeQmsPluginSpec>
@end

@implementation QmsPlugin

RCT_EXPORT_MODULE()

- (instancetype)init {
  if (self = [super init]) {
    NSLog(@"[QmsPlugin] Native module initialized");
    NSLog(@"QmsPlugin loaded");
    BOOL responds = [QmsPlugin instancesRespondToSelector:@selector(showPluginUI:reject:)];
    NSLog(@"QmsPlugin responds to showPluginUI:reject:? %@", responds ? @"YES" : @"NO");
    if (![QmsPlugin conformsToProtocol:@protocol(NativeQmsPluginSpec)]) {
      NSLog(@"❌ QmsPlugin does NOT conform to NativeQmsPluginSpec");
    } else {
      NSLog(@"✅ QmsPlugin conforms to NativeQmsPluginSpec");
    }
  }
  return self;
}

// Wraps the C function QmsPluginMakeViewController
- (void)showPluginUI {
  NSLog(@"[QmsPlugin] showPluginUI CALLED from JS");

  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *vc = [QmsPluginUI makeViewController];
    NSLog(@"[QmsPlugin] created Dashboard VC: %@", vc);

    UIWindow *keyWindow = UIApplication.sharedApplication.keyWindow;
    if (!keyWindow) {
      for (UIWindowScene *scene in UIApplication.sharedApplication.connectedScenes) {
        if (scene.activationState == UISceneActivationStateForegroundActive) {
          for (UIWindow *window in scene.windows) {
            if (window.isKeyWindow) {
              keyWindow = window;
              break;
            }
          }
        }
        if (keyWindow) break;
      }
    }

    if (!keyWindow) {
      NSLog(@"[QmsPlugin] ❌ ERROR: Could not find key window");
      return;
    }

    UIViewController *presentingVC = keyWindow.rootViewController;
    while (presentingVC.presentedViewController) {
      presentingVC = presentingVC.presentedViewController;
    }

    if (!presentingVC) {
      NSLog(@"[QmsPlugin] ❌ ERROR: No presenting VC found");
      return;
    }

    NSLog(@"[QmsPlugin] Presenting Dashboard from %@", presentingVC);
    [presentingVC presentViewController:vc animated:YES completion:^{
      NSLog(@"[QmsPlugin] ✅ Dashboard UI presented successfully");
    }];
  });
}


// TurboModule boilerplate
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
  {
    NSLog(@"[QmsPlugin] getTurboModule called");
    auto module = std::make_shared<facebook::react::NativeQmsPluginSpecJSI>(params);
    NSLog(@"[QmsPlugin] TurboModule created: %p", module.get());    
    return module;
  }

@end
