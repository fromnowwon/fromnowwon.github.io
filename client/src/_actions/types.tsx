// 모든 액션에는 type이 존재해야 하며 그 외에는 자유
export const LOGIN_USER = 'login_user' as const;
export const REGISTER_USER = 'register_user' as const;
export const AUTH_USER = 'auth_user' as const;
export const LOGOUT_USER = 'logout_user' as const;

export const PAGE_MODE = 'page_mode' as const;