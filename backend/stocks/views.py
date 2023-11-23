from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q

from .serializers import OrdersSerializer, OrdersCreateSerializer, TransactionsSerializer
from .models import Order, Transaction
from .services import create_order


class GetMyOrders(mixins.ListModelMixin, viewsets.GenericViewSet):

    def get_serializer_class(self):
        return OrdersSerializer

    def get_queryset(self):
        return Order.objects.filter(is_active=True)

    @action(methods=["GET"], detail=False)
    def get_my_order(self, request):
        username = request.GET.get("username")
        queryset = Order.objects.filter(user__username=username, is_active=True)
        serializer = self.get_serializer_class()
        serializer = serializer(queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    @action(methods=["GET"], detail=False)
    def get_my_transactions(self, request):
        username = request.GET.get("username")
        queryset = Transaction.objects.filter(Q(buyer__username=username) | Q(seller__username=username))
        serializer = TransactionsSerializer(queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class CreateOrder(viewsets.GenericViewSet):

    def get_serializer_class(self):
        return OrdersCreateSerializer

    @action(methods=["POST"], detail=False)
    def create_order_by_user(self, request):
        data = request.data
        returned_order = create_order(data)
        if returned_order:
            return Response(data=returned_order, status=status.HTTP_201_CREATED)
