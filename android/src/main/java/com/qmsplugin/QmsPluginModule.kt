// QmsPluginModule.kt
package com.qmsplugin

import android.content.Intent
import com.facebook.react.bridge.*
import com.convep.qmsplugin.QmsWelcomeActivity

class QmsPluginModule(private val ctx: ReactApplicationContext)
  : ReactContextBaseJavaModule(ctx) {

  override fun getName() = "QmsPlugin"

  @ReactMethod
  fun openWelcome(promise: Promise) {
    try {
      val intent = Intent(ctx, QmsWelcomeActivity::class.java) // from the AAR
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      ctx.startActivity(intent)
      promise.resolve(true)
    } catch (e: Exception) {
      promise.reject("QMS_OPEN_FAIL", e)
    }
  }
}
