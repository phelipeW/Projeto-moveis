import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import RadioForm from 'react-native-simple-radio-button';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Buttons';
import styles from './styles';

import { Creators as ProductActions } from '../../../store/ducks/product';
import { colors } from '../../../styles';

const NewProduct = ({ route, navigation }) => {
  const dispatch = useDispatch();
  // HOOKS
  const [costPriceRef, setCostPriceRef] = useState('');
  const [sellPriceRef, setSellPriceRef] = useState('');
  const [durationRef, setDurationRef] = useState('');
  const [type, setType] = useState(0);

  const readOnly = route.params?.readOnly;
  const item = route.params?.item;
  const tabType = route?.params?.tabType;

  const radio_props = [
    { label: 'Produto', value: 0 },
    { label: 'Serviço', value: 1 },
  ];

  const { addLoading, addSuccess } = useSelector((state) => state.product);

  const doRegister = (values) => {
    console.log(values);
    if (readOnly) {
      if (tabType) {
        console.log('tab');
        dispatch(
          ProductActions.editServiceRequest({ id: item.id, service: values }),
        );
      } else {
        dispatch(
          ProductActions.editProductRequest({ id: item.id, product: values }),
        );
      }
    } else if (type === 1) {
      dispatch(ProductActions.postService(values));
    } else if (type === 0) {
      dispatch(ProductActions.postProduct(values));
    }
  };

  useEffect(() => {
    if (addSuccess === true) {
      dispatch(ProductActions.editProductReset());
      dispatch(ProductActions.editServiceReset());
      navigation.goBack();
    }
  }, [addSuccess]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={
          tabType
            ? {
                description: readOnly ? item.description : '',
                cost: readOnly ? item.cost : '',
                sell: readOnly ? item.sell : '',
                duration: tabType ? String(item.duration) : '',
              }
            : {
                description: readOnly ? item.description : '',
                cost: readOnly ? item.cost : '',
                sell: readOnly ? item.sell : '',
              }
        }
        onSubmit={doRegister}
        validationSchema={yup.object().shape({
          cost: yup.string().required('Campo obrigatório'),
          sell: yup.string().required('Campo obrigatório'),
          description: yup.string().required('Campo obrigatório'),
          duration: tabType
            ? yup.string().required('Campo obrigatório')
            : yup.string(),
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
            <RadioForm
              radio_props={radio_props}
              initial={tabType ? 1 : 0}
              onPress={(value) => {
                setType(value);
              }}
              style={{ marginTop: 10 }}
            />
            <FormInput
              label="Descrição"
              autoCapitalize="words"
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
            {(type === 1 || tabType) && (
              <>
                <FormInput
                  label="Duração (minutos)"
                  autoCapitalize="words"
                  setRefInput={setDurationRef}
                  placeholder=""
                  value={values.duration}
                  onChangeText={handleChange('duration')}
                  onBlur={() => setFieldTouched('duration')}
                  msg={
                    touched.duration && errors.duration ? errors.duration : null
                  }
                  style={{ borderColor: colors.light }}
                  textStyle={{
                    color: colors.black,

                    fontWeight: 'bold',
                  }}
                  keyboardType="numeric"
                />
              </>
            )}
            {addLoading ? (
              <Button
                style={{ alignSelf: 'center', marginTop: 30 }}
                onPress={submitForm}
              >
                <ActivityIndicator
                  color={colors.black}
                  style={{ alignSelf: 'center' }}
                />
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
