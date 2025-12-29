export type Contact = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResponse = {
  message?: string;
  _id?: string;
  data?: Contact | Contact[];
};
