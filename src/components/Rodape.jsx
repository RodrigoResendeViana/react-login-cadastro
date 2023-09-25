import {} from 'react'
import { FaBeer } from 'react-icons/fa';
import styles from '../css/Rodape.module.css'



function Ropade (){
  return(
   
    <section className={styles.rodape}>
    <h3 className={styles.h3}>@2023-todos os direitos reservados</h3>
    <FaBeer/>
    </section>
  
  )
   

}
export default Ropade