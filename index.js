

const roll = document.querySelector('.roller__roll')
const c = console.log
const label = document.querySelector('.label__input')
const whiteTheme = function(){
    document.documentElement.style.setProperty('--bg1','hsl(0, 0%, 90%)')
document.documentElement.style.setProperty('--bg2','hsl(0, 5%, 81%)')
document.documentElement.style.setProperty('--bg3','hsl(0, 0%, 93%)')
document.documentElement.style.setProperty('--kbg1','hsl(185, 42%, 37%)')
document.documentElement.style.setProperty('--kbg2','hsl(185, 58%, 25%)')
document.documentElement.style.setProperty('--kbg3','hsl(25, 98%, 40%)')
document.documentElement.style.setProperty('--kbg4','hsl(25, 99%, 27%)')
document.documentElement.style.setProperty('--kbg5','hsl(45, 7%, 89%)')
document.documentElement.style.setProperty('--kbg6','hsl(35, 11%, 61%)')
document.documentElement.style.setProperty('--text1','hsl(60, 10%, 19%)')
document.documentElement.style.setProperty('--text2','hsl(0, 0, 100%)')
document.documentElement.style.setProperty('--text3','hsl(0, 0, 100%)')

}
const grayTheme = function(){
    document.documentElement.style.setProperty('--bg1','hsl(222, 26%, 31%)')
    document.documentElement.style.setProperty('--bg2','hsl(223, 31%, 20%)')
    document.documentElement.style.setProperty('--bg3','hsl(224, 36%, 15%)')

    document.documentElement.style.setProperty('--kbg1','hsl(225, 21%, 49%)')
    document.documentElement.style.setProperty('--kbg2','hsl(224, 28%, 35%)')
    document.documentElement.style.setProperty('--kbg3','hsl(6, 63%, 50%)')
    document.documentElement.style.setProperty('--kbg4','hsl(6, 70%, 34%)')
    document.documentElement.style.setProperty('--kbg5','hsl(30, 25%, 89%)')
    document.documentElement.style.setProperty('--kbg6','hsl(28, 16%, 65%)')

    document.documentElement.style.setProperty('--text1','hsl(221, 14%, 31%)')
    document.documentElement.style.setProperty('--text2','white')
    document.documentElement.style.setProperty('--text3','white')
}
const greenTheme = function(){
    document.documentElement.style.setProperty('--bg1','hsl(268, 75%, 9%)')
    document.documentElement.style.setProperty('--bg2','hsl(268, 71%, 12%)')
    document.documentElement.style.setProperty('--bg3','hsl(268, 71%, 12%)')

    document.documentElement.style.setProperty('--kbg1','hsl(281, 89%, 26%)')
    document.documentElement.style.setProperty('--kbg2','hsl(285, 91%, 52%)')
    document.documentElement.style.setProperty('--kbg3',' hsl(176, 100%, 44%)')
    document.documentElement.style.setProperty('--kbg4','hsl(177, 92%, 70%)')
    document.documentElement.style.setProperty('--kbg5',' hsl(268, 47%, 21%)')
    document.documentElement.style.setProperty('--kbg6','hsl(290, 70%, 36%)')

    document.documentElement.style.setProperty('--text1','hsl(52, 100%, 62%)')
    document.documentElement.style.setProperty('--text2','white')
    document.documentElement.style.setProperty('--text3','hsl(52, 100%, 62%)')
}
const Themes = [grayTheme,greenTheme,whiteTheme,]
greenTheme()
let curr = 2
const getNextNumber = function(){
    if(curr==3){
        curr = 1
        return curr
    }else{
        curr++
        return curr
    }
}
document.querySelector('.roller').parentElement.addEventListener('click',function(e){
    c(e)
    c(roll)
    Themes[getNextNumber()-1]()
    

    roll.style.transform = `translate(${-250 + curr*100}%,-50%)`
    
})
c(document.querySelectorAll('a').forEach(x=>{
    x.addEventListener('click',e=>{
        e.preventDefault()
    })
}))
const updateLabel = function(str){
    label.textContent = str
}
let labelHolder = '0'
let hollow = true
updateLabel('0')


const buttons = document.querySelector('.buttons')
c(buttons)
function clicked(e){
    if(e.target.classList.contains('btn--equal')){
        labelHolder = eval(labelHolder).toString()
        c(labelHolder)
        updateLabel(labelHolder)
    }else if(e.target.classList.contains('btn--reset')){
        labelHolder = '0'
        updateLabel(labelHolder)
    }else if(e.target.classList.contains('btn--del')){
       
        if(labelHolder.length==1){
            labelHolder = 0
            updateLabel(labelHolder)
        }else{
            labelHolder = labelHolder.slice(0,-1)
            updateLabel(labelHolder)
        }
    }else if(e.target.classList.contains('btn')){
       
        if(!isNaN(e.target.textContent)|| e.target.textContent=='.'){
            labelHolder = labelHolder=='0'?''+ e.target.textContent: labelHolder + e.target.textContent
            updateLabel(labelHolder)
        }else{
            if('+/-*'.includes(labelHolder.at(-1))){
                labelHolder =  labelHolder.slice(0,-1)
                labelHolder += e.target.textContent
                updateLabel(labelHolder)
            }else{
                labelHolder += e.target.textContent
                 updateLabel(labelHolder) 
            }

        }

        
    }
}
buttons.addEventListener('click',clicked)




