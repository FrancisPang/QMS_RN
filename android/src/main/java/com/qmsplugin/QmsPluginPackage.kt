package com.qmsplugin

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.convep.qmsplugin.QmsDashboardManager

class QmsPluginPackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> =
    listOf(QmsPluginModule(reactContext))

  override fun createViewManagers(reactContext: ReactApplicationContext)
    = listOf<com.facebook.react.uimanager.ViewManager<*, *>>(QmsDashboardManager())

}
