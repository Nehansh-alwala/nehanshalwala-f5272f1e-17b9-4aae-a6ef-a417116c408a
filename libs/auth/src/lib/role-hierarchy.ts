import {Role} from '@nehansh/data'

export const roleHierarchy: Record<Role, Role[]> = {
  [Role.OWNER]: [Role.ADMIN, Role.VIEWER],
  [Role.ADMIN]: [Role.VIEWER],
  [Role.VIEWER]: [],
};

export function canPerformRole(userRole: Role, requiredRole: Role): boolean {
  if (userRole === requiredRole) return true;
  return roleHierarchy[userRole]?.includes(requiredRole) ?? false;
}