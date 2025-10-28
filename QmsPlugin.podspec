require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "QmsPlugin"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]
  s.platforms    = { :ios => "12.4" }

  s.source       = { :git => "http://convep.ddns.me:20000/WeiHan/weihan-plugin.git", :tag => "#{s.version}" }
  s.source_files = "ios/QmsPlugin/**/*.{h,m,mm,cpp}", "ios/QmsPluginSpec/**/*.{h,mm}"
  s.private_header_files = "ios/QmsPlugin/**/*.h"
  s.public_header_files = "ios/QmsPluginSpec/**/*.h"

  s.preserve_paths = "ios/QmsPluginFramework.xcframework"
  s.vendored_frameworks = "ios/QmsPluginFramework.xcframework"

  s.dependency "React-Core"
  s.dependency "ReactCommon"
  s.dependency "React-Codegen"

  s.pod_target_xcconfig = {
    "DEFINES_MODULE" => "YES",
    "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"
  }

  install_modules_dependencies(s)
end
