"""empty message

Revision ID: 65348b3862b7
Revises: 84d102b06500
Create Date: 2022-05-23 13:53:26.323000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65348b3862b7'
down_revision = '84d102b06500'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('character', 'best_signets',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('character', 'description',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('character', 'image',
               existing_type=sa.VARCHAR(length=300),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('character', 'name',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('signets', 'best_used',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('signets', 'signet_description',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('signets', 'signet_image',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('signets', 'signet_name',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('weapon', 'abilities',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('weapon', 'weapon_description',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('weapon', 'weapon_image',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=800),
               existing_nullable=False)
    op.alter_column('weapon', 'weapon_name',
               existing_type=sa.VARCHAR(length=120),
               type_=sa.String(length=800),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('weapon', 'weapon_name',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.alter_column('weapon', 'weapon_image',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.alter_column('weapon', 'weapon_description',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('weapon', 'abilities',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('user', 'password',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('signets', 'signet_name',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.alter_column('signets', 'signet_image',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.alter_column('signets', 'signet_description',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('signets', 'best_used',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('character', 'name',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=120),
               existing_nullable=False)
    op.alter_column('character', 'image',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=300),
               existing_nullable=False)
    op.alter_column('character', 'description',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('character', 'best_signets',
               existing_type=sa.String(length=800),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###
