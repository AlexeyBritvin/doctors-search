import { Doctor } from './doctor.model';
import { AppResponse } from './response.model';

export interface DoctorsResponse extends AppResponse<{items: Doctor[]}> {}
