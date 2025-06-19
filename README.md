# Frontend API Integration Guide

## Overview

This frontend application has been integrated with the Laravel backend API to provide full functionality for a car marketplace platform called "Otlobha" (اطلبها).

## Backend API Endpoints

### Authentication

- `POST /api/register` - Register new user with phone and password
- `POST /api/login` - Login with phone and password
- `POST /api/logout` - Logout current user
- `POST /api/forgot-password` - Verify phone for password reset
- `POST /api/reset-password` - Reset password with phone verification

### Brands

- `GET /api/brands` - Get all brands
- `GET /api/brands/{id}/cars` - Get cars by brand ID

### Models

- `GET /api/models` - Get all car models
- `GET /api/models/{id}/cars` - Get cars by model ID

### Body Types

- `GET /api/body-types` - Get all body types
- `GET /api/body-types/{id}/cars` - Get cars by body type ID

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders/status/{orderId}` - Get order status
- `GET /api/orders/my-orders` - Get current user's orders

### Customer Profile

- `GET /api/profile` - Get user profile
- `POST /api/profile/update` - Update user profile
- `POST /api/profile/change-password` - Change user password

### Search

- `GET /api/search?query={query}` - Search cars, brands, models, and body types

### Settings

- `GET /api/settings` - Get application settings

## Frontend Components

### New API-Integrated Components

1. **Brands Component** (`src/components/Brands.js`)

   - Displays all available brands
   - Fetches data from `/api/brands`
   - Navigates to brand-specific cars

2. **BrandCars Component** (`src/components/BrandCars.js`)

   - Shows cars for a specific brand
   - Fetches data from `/api/brands/{id}/cars`
   - Displays car details, images, and prices

3. **Orders Component** (`src/components/Orders.js`)
   - Shows user's orders
   - Fetches data from `/api/orders/my-orders`
   - Displays order status and details

### Updated Components

1. **Login Component** (`src/Login.js`)

   - Now uses phone instead of email
   - Integrates with `/api/login` endpoint
   - Proper error handling and loading states

2. **Signup Component** (`src/Signup.js`)

   - Uses phone for registration
   - Integrates with `/api/register` endpoint
   - Validation and error handling

3. **Forgit Component** (`src/Forgit.js`)

   - Two-step password reset process
   - Phone verification and password reset
   - Integrates with `/api/forgot-password` and `/api/reset-password`

4. **Home Component** (`src/Home.js`)
   - Real search functionality
   - Integrates with `/api/search` endpoint
   - Updated navigation to new components

## API Service Layer

### Main API Service (`src/services/api.js`)

A comprehensive service layer that handles all API communications:

```javascript
// Import the API service
import API from "./services/api";

// Example usage
const brands = await API.brands.getAllBrands();
const cars = await API.brands.getCarsByBrand(brandId);
const orders = await API.orders.getMyOrders();
```

### Authentication Handling

- JWT tokens are stored in localStorage
- Automatic token inclusion in requests
- Automatic redirect to login on 401 errors

### Error Handling

- Comprehensive error handling across all API calls
- User-friendly error messages in Arabic
- Loading states for better UX

## Key Features Implemented

1. **Phone-based Authentication**

   - Registration and login using phone numbers
   - Password reset with phone verification

2. **Brand and Car Management**

   - Browse all brands
   - View cars by brand
   - Detailed car information display

3. **Order Management**

   - Create new orders
   - Track order status
   - View order history

4. **Search Functionality**

   - Real-time search across cars, brands, models
   - Results include relevant information

5. **Responsive Design**
   - All components are mobile-friendly
   - Consistent styling across components

## Configuration

### Backend URL Configuration

Update the API base URL in `src/services/api.js`:

```javascript
const API_BASE_URL = "http://localhost:8000/api"; // Change this to your backend URL
```

### Authentication Token Storage

The application uses localStorage to store JWT tokens:

- Key: `jwt`
- Value: JSON object containing `access_token`

## Routing

### New Routes Added

- `/brands` - All brands page
- `/brands/:brandId/cars` - Cars by brand page
- `/orders` - User orders page
- `/my-orders` - Alternative route for user orders

### Updated Routes

- `/login` - Enhanced login page
- `/signup` - Enhanced signup page
- `/forgit` - Enhanced password reset page

## Installation and Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Ensure the backend API is running on the configured URL

## Logical Issues Fixed

1. **Authentication Mismatch**: Changed from email-based to phone-based authentication to match backend
2. **Dummy API Calls**: Replaced all dummy API calls with real backend integration
3. **Error Handling**: Added proper error handling for all API calls
4. **Loading States**: Added loading indicators for better user experience
5. **Token Management**: Implemented proper JWT token handling
6. **Navigation**: Updated navigation to work with new components
7. **Data Formatting**: Added proper date and price formatting
8. **Image Handling**: Proper handling of car images from backend

## Future Enhancements

1. **Pagination**: Add pagination for large datasets
2. **Filtering**: Add advanced filtering options
3. **Caching**: Implement API response caching
4. **Offline Mode**: Add offline capability
5. **Push Notifications**: Add real-time notifications for order updates

## Security Considerations

1. **Token Security**: JWT tokens are stored securely
2. **Input Validation**: All user inputs are validated
3. **HTTPS**: Use HTTPS in production
4. **CORS**: Ensure proper CORS configuration on backend

## Testing

The application includes:

- Error boundary handling
- Loading state management
- Responsive design testing
- API error handling

## Support

For any issues or questions regarding the API integration, please refer to the backend API documentation or contact the development team.
# Etlobha
