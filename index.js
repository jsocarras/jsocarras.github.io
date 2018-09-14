//var tf = require('@tensorflow/tfjs')
//import * as tf from '@tensorflow/tfjs';
import numpy as np;

async function myFirstTfjs() {
    const model = tf.loadModel('https://storage.cloud.google.com/sentiment-analysis-55b/model.json');
    x_test = np.array(['I am happy to see you'])
    X_test_indices = sentences_to_indices(x_test, word_to_index, maxLen)
    model.predict(X_test_indices);
}

myFirstTfjs();
