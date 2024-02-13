export default function (userId: string) {
  if (userId.length !== 36) {
    return false;
  }

  const partLength = [8, 4, 4, 4, 12];

  const validated = userId.split('-').map((part, i) => {
    if (part.length !== partLength[i]) {
      return false;
    }

    return true;
  });

  return validated.every((part) => part);
}
