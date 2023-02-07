import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
describe('Server endpoints responses', () => {
    it('Gets the endpoint /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it('Gets the endpoint /api', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('Gets the endpoint /api/images', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });
});
