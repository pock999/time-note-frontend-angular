import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  // 參考來源：https://ithelp.ithome.com.tw/articles/10247688
  // @Optional(): 代表著這個依賴項是可選的，如果沒有找到 ElementInjector，就也不會報錯。
  // @SkipSelf(): 代表除了自己以外的 ElementInjector，再向上找父級的ElementInjector，而不是當下的。
  // 組合在一起的意思大概就是，
  // 如果我在其他的子模組(有可能是功能模組)匯入此模組時，
  // 要往上找上一層級的模組(app module)是否有 core module，如果沒有就沒事，有的話就會拋出錯誤。（主要是針對懶載入的模組匯入 core module 時才會拋出錯誤）
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only'
      );
    }
  }
}
