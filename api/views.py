from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Person
from .serializers import PersonSerializer

@api_view(['GET'])
def list_people(request):
    people = Person.objects.all()
    serialized_people = PersonSerializer(people, many=True)
    return Response(serialized_people.data, status=status.HTTP_200_OK)
    
@api_view(['POST'])
def create_person(request):
    person = PersonSerializer(data=request.data)
    if person.is_valid():
        person.save()
        return Response(person.data, status=status.HTTP_201_CREATED)
    else:
        return Response(person.errors, status=status.HTTP_400_BAD_REQUEST)
