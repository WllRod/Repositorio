import styles from 'styled-components'

export const ProjectsContainer  = styles.div`
    padding-top: 70px;
    margin-left:30px;
    display:flex;
    flex-direction:row;
    gap:10px;
    width:100%;
    height:max-content;
    padding-left:150px;
    flex-wrap:wrap;
    position:relative;
    @media screen and (max-width:767px)
    {
        padding-left:0;
        margin-left:0px;
    }
`

export const ProjectsCard   = styles.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    width:30vw;
    height:65vh;
    border-radius:30px;
    @media screen and ( max-width: 767px ){
        width: 100%;
        height:50vh;
        margin-left:0px;
        margin-top:10px;
    }
`
export const ImgDiv = styles.div`
    height: 100%;
    background-image: url(${ props => props.url });
    background-size: cover;
    background-repeat: no-repeat;
    //background:yellow;
    opacity:0.5;
    display:flex;
    border-radius:30px;
    
    //filter: blur(1px);
`
export const HoverContainer = styles.div`
    width: 100%;
    height:100%;
    top:0;
    color:white;
    position:absolute;
    & > * {
        animation: fadeInUp 1s ease-in-out;
    }
`
export const Hover  = styles.div`
    width:100%;
    height:100%;
    position:relative;


    right: 0;
    &:after{
        content: '';
        background: #302f4e;
        width:100%;
        height:104.5%;
        position:absolute;
        top:0;
        right:0;
        opacity:1;
        border-radius:30px;
        box-shadow:10px 0px 10px 10px #353353;
        
        
    }
`

export const HoverContent   = styles.section`
    display:flex;
    width:100%;
    height:100%;
    visibility:${ props => props.visible ? 'visibility' : 'hidden'};
    
`
export const Description    = styles.span`
    letter-spacing:1.5px;
    
    @media screen and (max-width: 768px)
    {
        font-size:0.7rem;
    }
    @media screen and (min-width:1024px)
    {
        font-size: 1rem;
    }
    
`
export const ToolBar = styles.div`
    width:100%;
    height:100%;
    position:relative;
    
    
    right: 0;
    &:after{
        content: '';
        background: #353353;
        width:100%;
        height:104.5%;
        position:absolute;
        top:-14px;
        right:0;
        opacity:0.7;
        border-radius:30px 0 0 30px;
        box-shadow:10px 0px 10px 10px #353353;
        
    }


`

export const ToolBarChild = styles.div`
    color:black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
    
`

export const TypeOfProject = styles.div`
    position:absolute;
    color:white;
    right: 20px;
    background: #ff4c60;
    font-size:1.2rem;
    letter-spacing:1px;
    width:max-content;
    text-align:center;
    height:max-content;
    top:0;
    padding:10px;
    z-index:100;
    border-radius: 0 0 30px 30px;
    @media screen and (max-width: 767px)
    {
        font-size:1rem;
    }

    // @media screen and (min-width: 768px)
    // {
    //     border-radius: 0 0 30px 30px;
    //     top:0px;
    // }
    // @media screen and ( max-width: 767px ){
    //     width: 100%;
    //     height:100%;
    //     margin-left:0px;
    // }

`

export const ProjectTitle = styles.div`
    width: 100%;
    height: 10%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-weight:700;
    font-size:30px;
    padding: 15px;
`
export const ExpandInformations = styles.div`
    width: 100%;
    transition: height 0.5s ease;
    height: ${ props => props.open ? '100%' : '20%'};
    background:#302f4e;
    color:white;
    z-index:0;
    position:absolute;
    bottom:0;
    display:flex;
    flex-direction:column;
    border-radius: ${ props => props.open ? '30px' : '0 0 30px 30px'};
`
export const ExpandContainer = styles.div`
    width:100%;
    padding:20px;
    height:100%;
    visibility: ${ props => props.open ? 'visibility' : 'hidden'};
    transform: translateY(0);
    ${ props => props.open && `
        animation: fadeInUp 1s ease-in-out;
        @keyframes fadeInUp{
            0% {
                opacity: 0;
                transform: translate3d(0,100%,0);
            }
            100% {
                opacity: 1;
                transform: translateZ(0);
            }
        }
    `}
`