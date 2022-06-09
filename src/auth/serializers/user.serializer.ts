export function userSerializer(data: any): Record<string, any> {
  return {
    id: data.id,
    email: data.email,
    firstName: data.firstName ?? '',
    lastName: data.lastName ?? '',
    createdAt: data.createdAt,
  };
}
