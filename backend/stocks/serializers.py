from rest_framework import serializers

from django.contrib.auth import get_user_model

from .models import Order, Stock, Transaction

User = get_user_model()


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
        )


class StocksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = (
            "name",
        )


class OrdersSerializer(serializers.ModelSerializer):
    stock_name = StocksSerializer()

    class Meta:
        model = Order
        fields = (
            "id",
            "stock_name",
            "order_type",
            "price",
            "quantity",
            "time",
        )


class OrdersCreateSerializer(serializers.ModelSerializer):
    # stock_name = StocksSerializer()
    stock_name = serializers.CharField()
    username = serializers.CharField()

    class Meta:
        model = Order
        fields = (
            "username",
            "stock_name",
            "order_type",
            "price",
            "quantity",
        )


class TransactionsSerializer(serializers.ModelSerializer):
    stock_name = StocksSerializer()
    buyer = UsersSerializer()
    seller = UsersSerializer()

    class Meta:
        model = Transaction
        fields = (
            "id",
            "stock_name",
            "buyer",
            "seller",
            "price",
            "quantity",
        )
