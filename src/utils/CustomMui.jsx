import { styled } from '@mui/system';
import { Pagination, TextField } from '@mui/material';

export const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPagination-ul': {
    justifyContent: 'center', // Tengahkan item pagination secara horizontal
    marginTop: theme.spacing(0), // Tambahkan ruang di atas pagination
  },
  '& .MuiPaginationItem-root': {
    color: '#FF0000', // Ubah warna item pagination
    fontWeight: 'bold', // Membuat item pagination tebal
    '&:hover': {
      backgroundColor: 'lightgray', // Ubah warna latar belakang saat hover
    },
  },
  '& .Mui-selected': {
    backgroundColor: '#FF0000', // Ubah warna latar belakang halaman yang dipilih
    color: 'white', // Ubah warna teks halaman yang dipilih
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    // backgroundColor: '#3f3f46', // Ubah warna latar belakang input
    borderRadius: theme.spacing(1), // Tambahkan radius sudut input
    color: 'white',
    fontWeight: 'bold',
  },
  '& .MuiInputBase-input:hover': {
    // backgroundColor: '#52525b', // Ubah warna latar belakang saat hover
  },
  '& .MuiInputLabel-root': {
    color: 'white', // Ubah warna label
    fontWeight: 'bold',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white', // Warna label saat dalam keadaan fokus
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'white', // Ubah warna border saat hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Ubah warna border saat dalam keadaan fokus
    },
  },
}));

export const CustomTextFieldLight = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    // backgroundColor: '#3f3f46', // Ubah warna latar belakang input
    borderRadius: theme.spacing(1), // Tambahkan radius sudut input
    color: 'black',
    fontWeight: 'bold',
  },
  '& .MuiInputBase-input:hover': {
    // backgroundColor: '#52525b', // Ubah warna latar belakang saat hover
  },
  '& .MuiInputLabel-root': {
    color: 'black', // Ubah warna label
    fontWeight: 'bold',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black', // Warna label saat dalam keadaan fokus
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'black', // Ubah warna border saat hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', // Ubah warna border saat dalam keadaan fokus
    },
  },
}));
