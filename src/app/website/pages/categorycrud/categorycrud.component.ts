import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorycrud',
  templateUrl: './categorycrud.component.html',
  styleUrls: ['./categorycrud.component.scss'],
})
export class CategorycrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<Categoria>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriaService.getAllCategorias().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  filterCategory(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // exportExcel() {
  //   this.categoriaService.exportCategories().subscribe(
  //     (data: any) => {
  //       let file = new Blob([data], {
  //         type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  //       });
  //       let fileUrl = URL.createObjectURL(file);
  //       var anchor = document.createElement('a');
  //       anchor.download = 'categories.xlsx';
  //       anchor.href = fileUrl;
  //       anchor.click();

  //       this.openSnackBar('Archivo exportado correctamente', 'Exitosa');
  //     },
  //     (error: any) => {
  //       this.openSnackBar('No se pudo exportar el archivo', 'Error');
  //     }
  //   );
  // }
}
