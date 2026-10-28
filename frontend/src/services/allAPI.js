import apiService from "../api/apiService";

//register: called by auth component when register button is clicked
export const registerAPI = async (userData) => {
  return await apiService("POST", "/register", userData);
};

//login: called by auth component when login button is clicked
export const loginAPI = async (userData) => {
  return await apiService("POST", "/login", userData);
};

//google-login api: called by auth component when google login button is clicked
export const googleLoginAPI = async (userData) => {
  return await apiService("POST", "/google-login", userData);
};

//edit user api: called by edit component when edit button is clicked
export const userUpdateAPI = async (userId,userData) => {
  return await apiService("PUT", `/user/${userId}`, userData);
};

//add book api: called by uploadBook component when add button is clicked
export const addBookAPI = async (bookDetails) => {
  return await apiService("POST", `/book`, bookDetails);
};

//get home book api: home component when page loads
export const getHomeBooksAPI = async () => {
  return await apiService("GET", `/home-books`,{});
};

//get all book api: book component when page loads
export const getAllBooksAPI = async (searchKey) => {
  return await apiService("GET", `/all-books?search=${searchKey}`,{});
};

//get user book api: BookStatus component when it opens
export const getUserBooksAPI = async () => {
  return await apiService("GET", `/user-books`,{});
};

//get user bought book api: Book component when it opens
export const getUserBoughtBooksAPI = async () => {
  return await apiService("GET", `/bought-books`,{});
};

//delete user uploaded books api: bookStatus component when click on delete button
export const deleteUserBookAPI = async (bookId) => {
  return await apiService("DELETE", `/book/${bookId}`,{});
};

//view-book/:id
export const viewBookAPI = async (id) => {
  return await apiService("GET", `/view-book/${id}`,{});
};

//buy book
export const buyBookAPI = async (id) => {
  return await apiService("PUT", `/books/${id}/buy`,{});
};

//edit admin api: called by admin settings component when edit button is clicked
export const adminUpdateAPI = async (adminId,adminData) => {
  return await apiService("PUT", `/admin/${adminId}`, adminData);
};

//get all users api: called by admin resources component
export const userListAPI = async () => {
  return await apiService("GET", `/user-list`,{});
};

//get all books api: called by admin resources component
export const bookListAPI = async () => {
  return await apiService("GET", `/book-list`,{});
};

//update book status: called by admin resources component
export const editBookStatusAPI = async (id) => {
  return await apiService("PUT", `/book/${id}`,{});
};