from celery import shared_task
from django.db import transaction
from .models import Order, Inventory, Transaction


@shared_task()
@transaction.atomic
def search_active_deals():
    buyers = Order.objects.filter(order_type="Buy", is_active=True)
    sellers = Order.objects.filter(order_type="Sell", is_active=True)

    for buyer in buyers:
        for seller in sellers:
            if buyer.stock_name == seller.stock_name and buyer.user != seller.user and buyer.price >= seller.price:
                min_quantity = min(buyer.quantity, seller.quantity)
                order_price = min_quantity * buyer.price

                if buyer.quantity == min_quantity:
                    buyer.is_active = False
                if seller.quantity == min_quantity:
                    seller.is_active = False

                buyer.quantity -= min_quantity
                seller.quantity -= min_quantity

                buyer_inventory, created = Inventory.objects.get_or_create(owner=buyer.user,
                                                                           stock_name=buyer.stock_name)
                seller_inventory, created = Inventory.objects.get_or_create(owner=seller.user,
                                                                            stock_name=seller.stock_name)

                buyer_inventory.quantity += min_quantity
                seller_inventory.quantity += min_quantity

                Transaction.objects.create(
                    stock_name=buyer.stock_name,
                    buyer=buyer.user,
                    seller=seller.user,
                    price=order_price,
                    quantity=min_quantity
                ).save()
                buyer_inventory.save()
                seller_inventory.save()
                buyer.save()
                seller.save()

                return True
