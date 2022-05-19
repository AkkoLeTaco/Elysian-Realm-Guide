"""empty message

Revision ID: e85cae2e744d
Revises: 
Create Date: 2022-05-19 18:36:58.647898

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e85cae2e744d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('character',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=80), nullable=False),
    sa.Column('best_sigils', sa.String(), nullable=False),
    sa.Column('best_weapon', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sigils',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sigil_name', sa.String(length=120), nullable=False),
    sa.Column('sigil_image', sa.String(length=120), nullable=False),
    sa.Column('sigil_description', sa.String(length=80), nullable=False),
    sa.Column('best_used', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('sigil_image')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('weapon',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('weapon_name', sa.String(length=120), nullable=False),
    sa.Column('weapon_image', sa.String(length=120), nullable=False),
    sa.Column('weapon_description', sa.String(length=80), nullable=False),
    sa.Column('abilities', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('weapon_image')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('weapon')
    op.drop_table('user')
    op.drop_table('sigils')
    op.drop_table('character')
    # ### end Alembic commands ###
