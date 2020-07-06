import {useEffect, useState} from 'react';
import yelp from '../api/yelp';
export default id => {
  const [business, setBusiness] = useState(null);

  const getBusiness = async id => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, [id]);
  return [business];
};
