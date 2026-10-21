export type AlertType = 'success' | 'error' | 'warning' | 'info';

// shape of the props for the AlertBox component
// the parent component has to pass props that match it
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}


export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

// shape of the props for the UserProfileCard component
// the parent component has to pass props that match it
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}


export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

// shape of the props for the ProductDisplay component
// the parent component has to pass props that match it
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}