FROM python:3.10-alpine
RUN mkdir /backend
COPY ./ /backend
WORKDIR /backend
RUN pip install -r requirements.txt
EXPOSE 5000
ENTRYPOINT ["python3", "app.py"]