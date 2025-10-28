#import <React/RCTViewManager.h>
#import <QmsPluginFramework/QmsPluginFramework.h>
#import <QmsPluginFramework/QmsPlugin.h>

@interface QmsDashboardView : UIView
@property (nonatomic, strong) UIViewController *dashboardVC;
@property (nonatomic, assign) BOOL didSetupVC;
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
      _dashboardVC.view.frame = parentVC.view.bounds; // Force full screen
      _dashboardVC.view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
      [parentVC.view addSubview:_dashboardVC.view];   // Add directly to root VC
      [_dashboardVC didMoveToParentViewController:parentVC];
      _didSetupVC = YES;
    }
  }
}

@end


@interface QmsDashboardViewManager : RCTViewManager
@end

@implementation QmsDashboardViewManager

RCT_EXPORT_MODULE(QmsDashboardView)

- (UIView *)view {
  return [[QmsDashboardView alloc] init];
}

@end
