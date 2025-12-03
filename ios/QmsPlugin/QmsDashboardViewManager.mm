#import <React/RCTViewManager.h>
#import <QmsPluginFramework/QmsPluginFramework.h>
#import <QmsPluginFramework/QmsPlugin.h>

@interface QmsDashboardView : UIView
@property (nonatomic, strong) UIViewController *dashboardVC;
@property (nonatomic, assign) BOOL didSetupVC;
// New props
@property (nonatomic, copy) NSString *ClientID;
@property (nonatomic, copy) NSString *ClientCode;
@property (nonatomic, copy) NSString *user_token;
@end

@implementation QmsDashboardView

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    _dashboardVC = [QmsPluginUI makeViewController];
    _didSetupVC = NO;
    _dashboardVC.view.backgroundColor = [UIColor whiteColor];
  }
  return self;
}

- (void)didMoveToWindow {
  [super didMoveToWindow];
  if (self.window && !_didSetupVC) {
    UIViewController *parentVC = [UIApplication sharedApplication].keyWindow.rootViewController;
    if (parentVC) {
      [parentVC addChildViewController:_dashboardVC];
      _dashboardVC.view.frame = parentVC.view.bounds;
      _dashboardVC.view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
      [parentVC.view addSubview:_dashboardVC.view];
      [_dashboardVC didMoveToParentViewController:parentVC];
      _didSetupVC = YES;
      
      // Forward props once the VC is added
      [self forwardPropsToVC];
    }
  }
}

#pragma mark - Prop Setters

- (void)setClientID:(NSString *)ClientID {
    _ClientID = [ClientID copy];
    [self forwardProp:@"ClientID" value:_ClientID];
}

- (void)setClientCode:(NSString *)ClientCode {
    _ClientCode = [ClientCode copy];
    [self forwardProp:@"ClientCode" value:_ClientCode];
}

- (void)setUser_token:(NSString *)user_token {
    _user_token = [user_token copy];
    [self forwardProp:@"user_token" value:_user_token];
}

#pragma mark - Forward Props via KVC

- (void)forwardProp:(NSString *)key value:(NSString *)value {
    if (_dashboardVC && [_dashboardVC respondsToSelector:NSSelectorFromString(key)]) {
        @try {
            [_dashboardVC setValue:value forKey:key];
        } @catch (NSException *exception) {
            NSLog(@"⚠️ Failed to set %@ on dashboardVC: %@", key, exception);
        }
    }
}

- (void)forwardPropsToVC {
    [self forwardProp:@"ClientID" value:_ClientID];
    [self forwardProp:@"ClientCode" value:_ClientCode];
    [self forwardProp:@"user_token" value:_user_token];
}

@end

@interface QmsDashboardViewManager : RCTViewManager
@end

@implementation QmsDashboardViewManager

RCT_EXPORT_MODULE(QmsDashboardView)

- (UIView *)view {
  return [[QmsDashboardView alloc] init];
}

// ✅ Export the props so JS can pass values
RCT_EXPORT_VIEW_PROPERTY(ClientID, NSString)
RCT_EXPORT_VIEW_PROPERTY(ClientCode, NSString)
RCT_EXPORT_VIEW_PROPERTY(user_token, NSString)

@end
