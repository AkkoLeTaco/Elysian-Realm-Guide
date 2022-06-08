"""empty message

Revision ID: 9a972fc623c4
Revises: f05274cd6b7d
Create Date: 2022-06-08 23:05:19.988590

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a972fc623c4'
down_revision = 'f05274cd6b7d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('signets', 'best_used')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('signets', sa.Column('best_used', sa.VARCHAR(length=800), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
