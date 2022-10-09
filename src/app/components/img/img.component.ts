import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input()
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault =
    'https://raw.githubusercontent.com/platzi/angular-componentes/2-step/src/assets/images/default.png';

  counter = 0;
  counterFn: number | undefined;
  constructor() {
    //antes del render before render
    //asyncronas NO, solo una vez
    console.log('constructor', 'imgValue =>', this.img);
  }
  ngOnChanges(changes: SimpleChanges) {
    //antes del render before render
    //actualizando los inputs changes inputs-
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    // if(changes)
    // {

    // }
  }
  ngOnInit() {
    //antes del render before render
    //SII cosas asincronas--Corre solo un vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }
  //ANTES DEL RENDER
  //DESPUES DEL RENDER
  ngAfterViewInit(): void {
    //DESPUES DEL RENDER
    console.log('ngAfterViewInit', 'imgValue =>', this.img);
  }
  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy', 'imgValue =>', this.img);
    // window.clearInterval(this.counterFn);
  }

  imgEror() {
    this.img = this.imgDefault;
  }
  imgLoad() {
    console.log('hijo');
    this.loaded.emit(this.img);
  }
}
