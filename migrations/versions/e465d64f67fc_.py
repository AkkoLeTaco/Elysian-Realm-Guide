"""empty message

Revision ID: e465d64f67fc
Revises: 52bdb6232889
Create Date: 2022-05-23 14:27:16.693608

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e465d64f67fc'
down_revision = '52bdb6232889'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('weapon', 'abilities',
               existing_type=sa.VARCHAR(length=800),
               type_=sa.Text(),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('weapon', 'abilities',
               existing_type=sa.Text(),
               type_=sa.VARCHAR(length=800),
               existing_nullable=False)
    # ### end Alembic commands ###