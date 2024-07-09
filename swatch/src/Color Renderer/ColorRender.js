import Color from './Color'

const colors = [{
    hex: '#91A6FF',
    name: 'Cornflower Blue'
},
{
    hex: '#FF88DC',
    name: 'Persian Pink'
},
{
    hex: '#80FF72',
    name: 'Screamin Green'
},
{
    hex: '#FF5154',
    name: 'Tart Orange'
}]
const ColorRenderer = () =>{
    return(
        <div>
            {colors.map(color => <Color key={color.hex} hex={color.hex} name={color.name}/>)}
        </div>
    )
}
export default ColorRenderer;