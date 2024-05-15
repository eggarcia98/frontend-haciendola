import type { PageLoad } from './$types';
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`http://localhost:3006/api/products`);
    const data = await res.json();
    const {products} = data

	return { products: data };
};