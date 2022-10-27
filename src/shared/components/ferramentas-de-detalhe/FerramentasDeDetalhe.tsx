import { Button, Divider, Icon, Paper, useTheme } from "@mui/material"
import { Box } from "@mui/system"

interface IFerramentasDeDetalheProps{
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}   

export const FerramentasDeDetalhe:React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {
    const theme = useTheme()

    return(
        <Box height={
            theme.spacing(5)
            } 
            marginX={1} 
            padding={1} 
            paddingX={2}
            gap={1}
            display='flex'
            alignItems='center'
            component={Paper}
        >
            {mostrarBotaoSalvar &&(
                <Button
                variant='contained'
                disableElevation
                color='primary'
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvar}
                >
                    Salvar
                </Button>
            )}
            {mostrarBotaoSalvarEFechar &&(
                <Button
                variant='outlined'
                disableElevation
                color='primary'
                startIcon={<Icon>save</Icon>}
                onClick={aoClicarEmSalvarEFechar}
                >
                    Salvar e Voltar
                </Button>
            )}
            {mostrarBotaoApagar &&(
                <Button
                variant='outlined'
                disableElevation
                color='primary'
                startIcon={<Icon>delete</Icon>}
                onClick={aoClicarEmApagar}
                >
                    Apagar
                </Button>
            )}
            {mostrarBotaoNovo &&(
                <Button
                variant='outlined'
                disableElevation
                color='primary'
                startIcon={<Icon>add</Icon>}
                onClick={aoClicarEmNovo}
                >
                    {textoBotaoNovo}
                </Button>
            )}

            <Divider variant='middle' orientation='vertical' />

            {mostrarBotaoVoltar &&(
                <Button
                variant='outlined'
                disableElevation
                color='primary'
                startIcon={<Icon>arrow_back</Icon>}
                onClick={aoClicarEmVoltar}
                >
                    Voltar
                </Button>
            )}
        </Box>
    )
}

//17