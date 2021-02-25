import styles from "../styles/components/Profile.module.css";

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/dhianaslv.png" alt="Imagem de perfil"/>
            <div>
                <strong>Dhiana Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}