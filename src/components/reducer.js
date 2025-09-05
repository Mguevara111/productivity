
let widgetfind;
let newelement;
export function Reducer(state,action){
    switch(action.type){
        case 'addwidget':
            let widgetid=crypto.randomUUID();
            let newwidget={
                id:widgetid,
                type:action.payload.type,
                name:action.payload.content,
                elements:[]
            }
            return [
                ...state,newwidget
            ]
            case 'removewidget':
                widgetfind=findid(state,action.payload)
                //console.log('wf',widgetfind)
                const newstate=state.filter(el=>el.id!==widgetfind.id)
                if(widgetfind!==null){
                    return newstate;
                }
            case 'addelement':
                widgetfind=findid(state,String(action.payload.id))
                if(widgetfind!==null){
                    if(widgetfind.type==='Task'){
                        newelement={
                            key:action.payload.key,
                            elecontent:action.payload.elecontent,
                            ischecked:false
                        }
                    }else{
                        newelement={
                            key:action.payload.key,
                            elecontent:action.payload.elecontent
                        }
                    }
                    
                    const elementedit=state.map(el=>{
                        if(widgetfind.id===el.id){
                            return {...el,elements:[...el.elements,newelement]}
                        }else{
                            return el
                        }
                    })
                    return elementedit;
                }
            case 'checktask':
                const valor=state.map(el=>{
                    if(String(el.id)===action.payload.taskid){
                        //console.log(el.elements)
                        const nv=el.elements.map(ele=>{
                        if(String(ele.key)===action.payload.taskkey){
                            return {...ele,ischecked:!ele.ischecked}
                        }else{
                            return ele;
                        }
                        
                        })
                        //console.log(nv) //nv array de objetos
                        return {...el,elements:nv}
                    }else{
                        return el;
                    }
                })
            
            return valor;

            case 'editnote':
                const aftereditnote=state.map(el=>{
                    if(String(el.id)===action.payload.noteid){
                        const prov=el.elements.map(ele=>{
                            if(String(ele.key)===action.payload.notekey){
                                return {...ele,elecontent:action.payload.notecontent}
                            }else{
                                return ele
                            }
                        })
                        //console.log(prov)
                        return {...el,elements:prov}
                    }
                    else{
                       return el
                    }
                })
                //console.log(aftereditnote)
                return aftereditnote

            case 'deletenote':
                const nnote=state.map(el=>{
                    if(String(el.id)===action.payload.idnote){
                        const algo=el.elements.filter(ele=>String(ele.key)!==action.payload.keynote)
                        return {...el,elements:algo}
                    }else{
                        return el
                    }
                })
                return nnote
        default:
            return state;
    }
}

function findid(estado,dato){
    const datafind=estado.find(el=>String(el.id)===dato)
    //console.log(dato)
    if(datafind){
        return datafind;
    }else{
        console.log('no existe ese id')
        return null;
    }
    
}