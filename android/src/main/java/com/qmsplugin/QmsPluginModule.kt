// QmsPluginModule.kt
package com.qmsplugin

import android.content.Intent
import com.facebook.react.bridge.*
// import com.convep.qmsplugin.dashboard.QmsDashboardActivity

class QmsPluginModule(private val ctx: ReactApplicationContext)
  : ReactContextBaseJavaModule(ctx) {

  override fun getName() = "QmsPlugin"

  // @ReactMethod
// fun openDashboard(promise: Promise) {
//   try {
//     val intent = Intent(reactApplicationContext, QmsDashboardActivity::class.java)
//     intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
//     reactApplicationContext.startActivity(intent)
//     promise.resolve(true)
//   } catch (e: Exception) {
//     promise.reject("QMS_OPEN_DASHBOARD_FAIL", e)
//   }
// }

}
