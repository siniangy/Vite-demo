import request from '@/utils/axios';

interface IResponseType<p> {
	code?: number;
	status: number;
	msg: string;
	data: p;
}

interface ILogin {
	token: string;
	expires: number;
}

export const login = (username: string, password: string) => {
	return request<IResponseType<ILogin>>({
		url: '/api/auth/login',
		method: 'post',
		data: {
			username,
			password,
		},
	});
};
