export enum ApiState {
    IDDLE = 'iddle',
    LOADING = 'loading',
    SUCCESS = 'success',
    FAILED = 'failed',
}

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
}

export interface GuestSession {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}

export interface RateMovieProps {
    movieId: number;
    guestSession: string;
    rating: number;
}