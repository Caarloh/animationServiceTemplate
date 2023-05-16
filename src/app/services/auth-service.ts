import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly apiUrl = 'http://localhost:3001/auth';

    constructor(private readonly http: HttpClient) {}

    public login(username: string, password: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(this.apiUrl, { username, password }).pipe(
            tap(response => {
                localStorage.setItem('token', response.token);
            })
        );
    }

    public logout(): void {
        localStorage.removeItem('token');
    }

    public get isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token !== null;
    }
}