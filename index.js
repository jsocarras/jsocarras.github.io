const model = await tf.loadModel('https://storage.cloud.google.com/sentiment-analysis-55b/model.json');

x_test = np.array(['I am happy to see you'])
X_test_indices = sentences_to_indices(x_test, word_to_index, maxLen)
model.predict(X_test_indices)
