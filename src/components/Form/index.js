import React, {useState} from "react"
import {View,
        TextInput,
        Text, 
        TouchableOpacity,
        Vibration
} from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"



export default function Form () {
    
    const[heigth, setHeigth] = useState(null);
    const[weigth, setWeigth] = useState(null);
    const[messageImc, setMessageImc] = useState("Preencha o peso e a altura!");
    const[imc, setImc] = useState(null);
    const[textButton, setTextButton] = useState("Calcular");
    const[errorMessage, setErrorMessage] = useState(null);
    
    function verificationImc() {
        if(!imc) {
            Vibration.vibrate();
            setErrorMessage("Campo Obrigatório*");
        }
    }
    
    function calcImc() {
        let heigthFormat = heigth.replace(",", ".");
        let weigthFormat = weigth.replace(",", ".");
        return setImc((weigthFormat/(heigthFormat * heigthFormat)).toFixed(2));
    }

    function validationImc() {
        if (weigth && heigth) {
            calcImc();
            setMessageImc("Seu Imc é: ");
            setHeigth('');
            setWeigth('');
            setTextButton("Calcular novamente");
            setErrorMessage(null);
            return;
        }
        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura!");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}> 
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setHeigth}
                    value={heigth}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"/>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input} 
                    onChangeText={setWeigth} 
                    value={weigth}
                    placeholder="Ex. 50.5"
                    keyboardType="numeric"
                    />
                <TouchableOpacity onPress={() => validationImc()} style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}