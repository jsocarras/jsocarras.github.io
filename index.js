var tf = require('@tensorflow/tfjs')
import * as tf from '@tensorflow/tfjs';

x_test = np.array(['I am happy to see you'])
X_test_indices = sentences_to_indices(x_test, word_to_index, maxLen)
model.predict(X_test_indices)


async function myFirstTfjs() {
    const model = tf.loadModel('https://storage.cloud.google.com/sentiment-analysis-55b/model.json');
    
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
    
    await model.fit(xs, ys, {epochs: 250});
    
    document.getElementById('micro_out_div').innerText +=
    model.predict(tf.tensor2d([20], [1, 1]));
}

myFirstTfjs();
