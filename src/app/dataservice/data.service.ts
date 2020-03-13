import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Trabajador } from './trabajador';
import { Category } from './categoy';
import { User } from './user';


@Injectable()
export class DataService{

	constructor(private http: Http) {}
	
	private headers = new Headers({'Content-Type': 'application/json'});

		

		getTrabajadores(): Promise<Trabajador[]> {
			return this.http.get('https://back-end-servimax.herokuapp.com/Trabajador?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Trabajador[])
		}

		getUsers(): Promise<User[]> {
			return this.http.get('http://localhost:8081/api/v1/users', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as User[])
		}

		get(): Promise<Category[]> {
			return this.http.get('http://localhost:8081/api/v1/categories', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Category[])
		}

		createCategory(categoy: Category): Promise<Category> {
			return this.http
			.post("http://localhost:8081/api/v1/categories", JSON.stringify(categoy), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Category)
		}

		createUser(user: User): Promise<User> {
			return this.http
			.post("http://localhost:8081/api/v1/users", JSON.stringify(user), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as User)
		}
		deleteCategory(id: number): Promise<void> {
			const url = `${"http://localhost:8081/api/v1/categories"}/${id}`;
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}
		updateCategory(id: number): Promise<void> {
			const url = `${"http://localhost:8081/api/v1/categories"}/${id}`;
			return this.http.put(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}

		
		deleteTrabajadores(id: number): Promise<void> {
			const url = `${"https://back-end-servimax.herokuapp.com/Trabajador"}/${id}`;
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}
		
		createTrabajadores(d: Trabajador): Promise<Trabajador> {
			return this.http
			.post("https://back-end-servimax.herokuapp.com/Trabajador", JSON.stringify(d), {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Trabajador)
		}

		

}
	

