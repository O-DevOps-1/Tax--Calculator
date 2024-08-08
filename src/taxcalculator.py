from flask import Flask, request, render_template

app = Flask(__name__)

tax_rates = {
    'USA': 0.25,
    'Canada': 0.20,
    'UK': 0.20,
    'Australia': 0.30,
    'Germany': 0.25,
    'Spain': 0.22
}

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        amount = float(request.form['amount'])
        country = request.form['country']
        tax_rate = tax_rates[country]
        tax_amount = amount * tax_rate
        return render_template('index.html', tax_amount=tax_amount)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
