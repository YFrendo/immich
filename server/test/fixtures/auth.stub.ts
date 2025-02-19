import { AuthUserDto } from '@app/domain';

export const adminSignupStub = {
  name: 'Immich Admin',
  email: 'admin@immich.app',
  password: 'Password123',
};

export const userSignupStub = {
  ...adminSignupStub,
  memoriesEnabled: true,
};

export const loginStub = {
  admin: {
    email: 'admin@immich.app',
    password: 'Password123',
  },
};

export const changePasswordStub = {
  password: 'Password123',
  newPassword: 'Password1234',
};

export const authStub = {
  admin: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isPublicUser: false,
    isAllowUpload: true,
    externalPath: null,
  }),
  user1: Object.freeze<AuthUserDto>({
    id: 'user-id',
    email: 'immich@test.com',
    isAdmin: false,
    isPublicUser: false,
    isAllowUpload: true,
    isAllowDownload: true,
    isShowMetadata: true,
    accessTokenId: 'token-id',
    externalPath: null,
  }),
  user2: Object.freeze<AuthUserDto>({
    id: 'user-2',
    email: 'user2@immich.app',
    isAdmin: false,
    isPublicUser: false,
    isAllowUpload: true,
    isAllowDownload: true,
    isShowMetadata: true,
    accessTokenId: 'token-id',
    externalPath: null,
  }),
  external1: Object.freeze<AuthUserDto>({
    id: 'user-id',
    email: 'immich@test.com',
    isAdmin: false,
    isPublicUser: false,
    isAllowUpload: true,
    isAllowDownload: true,
    isShowMetadata: true,
    accessTokenId: 'token-id',
    externalPath: '/data/user1',
  }),
  adminSharedLink: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isAllowUpload: true,
    isAllowDownload: true,
    isPublicUser: true,
    isShowMetadata: true,
    sharedLinkId: '123',
  }),
  adminSharedLinkNoExif: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isAllowUpload: true,
    isAllowDownload: true,
    isPublicUser: true,
    isShowMetadata: false,
    sharedLinkId: '123',
  }),
  readonlySharedLink: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isAllowUpload: false,
    isAllowDownload: false,
    isPublicUser: true,
    isShowMetadata: true,
    sharedLinkId: '123',
    accessTokenId: 'token-id',
  }),
};

export const loginResponseStub = {
  admin: {
    response: {
      accessToken: expect.any(String),
      name: 'Immich Admin',
      isAdmin: true,
      profileImagePath: '',
      shouldChangePassword: true,
      userEmail: 'admin@immich.app',
      userId: expect.any(String),
    },
  },
  user1oauth: {
    response: {
      accessToken: 'cmFuZG9tLWJ5dGVz',
      userId: 'user-id',
      userEmail: 'immich@test.com',
      name: 'immich_name',
      profileImagePath: '',
      isAdmin: false,
      shouldChangePassword: false,
    },
    cookie: [
      'immich_access_token=cmFuZG9tLWJ5dGVz; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
      'immich_auth_type=oauth; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
    ],
  },
  user1password: {
    response: {
      accessToken: 'cmFuZG9tLWJ5dGVz',
      userId: 'user-id',
      userEmail: 'immich@test.com',
      name: 'immich_name',
      profileImagePath: '',
      isAdmin: false,
      shouldChangePassword: false,
    },
    cookie: [
      'immich_access_token=cmFuZG9tLWJ5dGVz; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
      'immich_auth_type=password; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
    ],
  },
  user1insecure: {
    response: {
      accessToken: 'cmFuZG9tLWJ5dGVz',
      userId: 'user-id',
      userEmail: 'immich@test.com',
      name: 'immich_name',
      profileImagePath: '',
      isAdmin: false,
      shouldChangePassword: false,
    },
    cookie: [
      'immich_access_token=cmFuZG9tLWJ5dGVz; HttpOnly; Path=/; Max-Age=34560000; SameSite=Lax;',
      'immich_auth_type=password; HttpOnly; Path=/; Max-Age=34560000; SameSite=Lax;',
    ],
  },
};
