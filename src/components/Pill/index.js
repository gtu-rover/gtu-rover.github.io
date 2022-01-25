import { Box } from 'rebass';

export const FixedPill = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        color: 'white',
        bg: 'red',
        px: 4,
        py: 2,
        right: 30,
        bottom: 20,
        borderRadius: 9999,
        fontSize: 18,
        fontWeight: 900
      }}
    >
      {children}
    </Box>
  );
};

export const AdminPill = () => {
  return <FixedPill>Admin</FixedPill>;
};
