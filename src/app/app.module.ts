import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule} from "@angular/forms";
import { AppService } from "./app.service";


@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
      
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }