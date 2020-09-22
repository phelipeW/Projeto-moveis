import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Buttons';
import styles from './styles';

import { Creators as ProductActions } from '../../../store/ducks/product';
import { colors } from '../../../styles';

const NewProduct = ({ route, navigation }) => {
  const dispatch = useDispatch();
  // HOOKS
  const [descriptionRef, setDescriptionRef] = useState('');
  const [costPriceRef, setCostPriceRef] = useState('');
  const [sellPriceRef, setSellPriceRef] = useState('');
  const readOnly = route.params?.readOnly;
  const item = route.params?.item;

  const { addLoading, addSuccess } = useSelector((state) => state.product);

  const doRegister = (values) => {
    if (readOnly) {
      dispatch(
        ProductActions.editProductRequest({ id: item.id, product: values }),
      );
    } else {
      dispatch(ProductActions.postProduct(values));
    }
  };

  useEffect(() => {
    if (addSuccess === true) {
      dispatch(ProductActions.editProductReset());
      navigation.goBack();
    }
  }, [addSuccess]);

  useEffect(() => {
    return () => {
      dispatch(ProductActions.getProduct());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          description: readOnly ? item.description : '',
          cost: readOnly ? item.cost : '',
          sell: readOnly ? item.sell : '',
        }}
        onSubmit={doRegister}
        validationSchema={yup.object().shape({
          cost: yup.string().required('Campo obrigatório'),
          sell: yup.string().required('Campo obrigatório'),
          description: yup.string().required('Campo obrigatório'),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          touched,
          setFieldTouched,
          submitForm,
        }) => (
          <View style={styles.formikContainer}>
            <FormInput
              label="Descrição"
              autoCapitalize="words"
              setRefInput={setDescriptionRef}
              returnKeyType="next"
              nextField={() => costPriceRef.focus()}
              placeholder=""
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              msg={
                touched.description && errors.description
                  ? errors.description
                  : null
              }
              style={{ borderColor: colors.light }}
              textStyle={{
                color: colors.black,

                fontWeight: 'bold',
              }}
            />
            <FormInput
              label="Preço de custo"
              autoCapitalize="words"
              setRefInput={setCostPriceRef}
              returnKeyType="next"
              nextField={() => sellPriceRef.focus()}
              placeholder=""
              value={values.cost}
              onChangeText={handleChange('cost')}
              onBlur={() => setFieldTouched('cost')}
              msg={touched.cost && errors.cost ? errors.cost : null}
              style={{ borderColor: colors.light }}
              textStyle={{
                color: colors.black,

                fontWeight: 'bold',
              }}
              keyboardType="numeric"
            />
            <FormInput
              label="Preço de venda"
              autoCapitalize="words"
              setRefInput={setSellPriceRef}
              placeholder=""
              value={values.sell}
              onChangeText={handleChange('sell')}
              onBlur={() => setFieldTouched('sell')}
              msg={touched.sell && errors.sell ? errors.sell : null}
              style={{ borderColor: colors.light }}
              textStyle={{
                color: colors.black,

                fontWeight: 'bold',
              }}
              keyboardType="numeric"
            />

            {addLoading ? (
              <Button
                style={{ alignSelf: 'center', marginTop: 30 }}
                onPress={submitForm}
              >
                <ActivityIndicator />
              </Button>
            ) : (
              <Button
                text={readOnly ? 'Salvar' : 'Cadastrar'}
                style={{ alignSelf: 'center', marginTop: 30 }}
                onPress={submitForm}
              />
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default NewProduct;
