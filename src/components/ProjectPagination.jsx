import {Box, Button} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function ProjectPagination({pages, currentPage, setCurrentPage}){
    const pageNumberArray = Array.from({length : pages}, (e,i)=>i+1);
    return (
        <>
            <Box className = "w-screen flex justify-center my-3">
                <Button variant={currentPage===1 ? 'outlined' : 'contained'} 
                        disabled={currentPage===1} 
                        className={`mx-5 ${currentPage === 1 ? '!border-input-border !text-primary-text hover:!bg-input-bg hover:!border-input-hover' : '!rounded-l !border-input-border !bg-light-card hover:!bg-primary-text !text-dark-text' }`}
                        onClick={()=>setCurrentPage(prev=>prev-1)}>
                    <ArrowLeftIcon/>
                </Button>
                {
                    pageNumberArray.map((p)=>{
                        const isActive = p === currentPage;
                        return (
                        <Button key={p} variant={isActive ? 'contained' : 'outlined'}
                                className={`gap-2 mx-1 !rounded-l ${isActive ? '!border-input-border !bg-light-card hover:!bg-primary-text !text-dark-text' : '!border-input-border !text-primary-text hover:!bg-input-bg hover:!border-input-hover'}`}
                                onClick={()=>setCurrentPage(p)}>
                            {p}
                        </Button>
                        )
                    })
                }
                <Button variant={currentPage===pages ? 'outlined' : 'contained'} 
                        disabled={currentPage===pages} 
                        className={`mx-5 ${currentPage === pages ? '!border-input-border !text-primary-text hover:!bg-input-bg hover:!border-input-hover' : '!rounded-l !border-input-border !bg-light-card hover:!bg-primary-text !text-dark-text' }`}
                        onClick={()=>setCurrentPage(prev=>prev+1)}>
                    <ArrowRightIcon/>
                </Button>
            </Box>
        </>
    );
}