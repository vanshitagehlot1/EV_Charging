import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// User authentication
export const registerUser = async (userData) => axios.post(`${API_BASE_URL}/users/register`, userData);
export const loginUser = async (userData) => axios.post(`${API_BASE_URL}/users/login`, userData);

// Charging stations
export const getStations = async (lat, lng) => axios.get(`${API_BASE_URL}/stations/nearby?lat=${lat}&lng=${lng}`);

// Bookings
export const bookSlot = async (bookingData, token) => axios.post(`${API_BASE_URL}/bookings`, bookingData, {
  headers: { Authorization: `Bearer ${token}` },
});

// Payments
export const createPayment = async (amount) => axios.post(`${API_BASE_URL}/payments/create`, { amount });
